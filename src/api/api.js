const getData = async () => {
  const url = "https://cataas.com/cat";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("failed to fetch img: " + res.status);
    return res.url;
  } catch (e) {
    return e.message;
  }
};

export default getData;
