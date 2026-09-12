const PORTFOLIO_DATA_URL =
  "https://JuliaAlvsMr.github.io/site-portfolio-julia/portfolio-data.json";

export async function getPortfolioData() {
  const response = await fetch(PORTFOLIO_DATA_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      "Não foi possível carregar os dados do portfólio."
    );
  }

  return response.json();
}