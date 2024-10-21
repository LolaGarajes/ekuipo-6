import { uploadImage } from '$lib/server/cloudinary';
import { redirect } from '@sveltejs/kit';


export const actions = {
	crearUsuario: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());



		uploadImage(data.send_image);

		redirect(302,'/')
		return;
	}
};