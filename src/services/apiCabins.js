import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('An error occurred while fetching cabins');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  // 1. Check if it's a string
  const isExistingPath =
    typeof newCabin.image === 'string' &&
    newCabin.image.startsWith(supabaseUrl);

  // 2. If it's an existing path, use it directly:
  let imagePath = newCabin.image;

  // 3. If it's a File object, generate a new path + name
  let imageName;
  if (!isExistingPath && newCabin.image instanceof File) {
    // Create a random name
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  }

  // 4. Insert or update the cabin in Supabase
  let query = supabase.from('cabins');
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('An error occurred while creating the cabin');
  }

  // 5. If it's a new file (and not just an existing path), upload it
  if (!isExistingPath && newCabin.image instanceof File && imageName) {
    const { error: storageError } = await supabase.storage
      .from('cabin-images')
      .upload(imageName, newCabin.image);

    // If the upload fails, remove the cabin record
    if (storageError) {
      await supabase.from('cabins').delete().eq('id', data.id);
      console.error(storageError);
      throw new Error('Cabin image could not be uploaded. Cabin was deleted.');
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('An error occurred while deleting the cabin');
  }

  return data;
}
