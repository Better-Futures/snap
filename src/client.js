import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_CLIENT_ID1,
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_API_TOKEN1
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


// "https://lh3.googleusercontent.com/a/ALm5wu0VnZSeEKbQAp4EZqdRh8U79HNfIzDR4hdQ5cy_9Q=s96-c"
// sub
// : 
// "100233616124511762975"
// [[Prototype]]
// : 
// Object
