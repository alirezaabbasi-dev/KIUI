/**
 * Fetches menu data from JSON file
 * @returns {Promise<Object|null>}
 */
async function fetchData(api ) {
  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error("Failed to fetch data");
    const result = await response.json();
    return  result.data;
  } catch (error) {
    console.error("Error loading Data:", error);
    return null;
  }
}

export { fetchData };
