import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '',
    dataset: 'production',
    apiVersion: '2022-04-20',
    useCdn: true,
    token: '',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);