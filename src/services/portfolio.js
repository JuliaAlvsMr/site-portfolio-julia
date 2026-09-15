export async function getPortfolioData() {
  const response = await fetch(
    `${import.meta.env.BASE_URL}portfolio-data.json`
  );

  if (!response.ok) {
    throw new Error("Não foi possível carregar os dados do portfólio.");
  }

  return response.json();
}