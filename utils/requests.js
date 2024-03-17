const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties.
async function fetchProperties() {
  try {
    // const apiUrl = process.env.NEXT_PUBLIC_API_DOMAIN;
    // console.log(`apiUrl: ${apiUrl}`);

    // Handle the case where the domain is not available yet.
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    console.log(`res: ${JSON.stringify(res)}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data.');
    }
    console.log(`Data was fetched.`);
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch single property.
async function fetchProperty(id) {
  try {
    // const apiUrl = process.env.NEXT_PUBLIC_API_DOMAIN;
    // console.log(`apiUrl: ${apiUrl}`);

    // Handle the case where the domain is not available yet.
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    // console.log(`res: ${JSON.stringify(res)}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data.');
    }
    console.log(`Data was fetched.`);
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };