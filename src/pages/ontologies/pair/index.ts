import type { APIRoute } from "astro";

export const prerender = false

export const GET: APIRoute = async ({ request, redirect }) => {
  switch (request.headers.get("Accept")) {
    case "application/ld+json":
      return redirect('/ontologies/pair-2021-summer/ontology.json', 303);

    case "application/rdf+xml":
      return redirect('/ontologies/pair-2021-summer/ontology.xml', 303);

    case "text/turtle":
      return redirect('/ontologies/pair-2021-summer/ontology.ttl', 303);

    case "application/n-triples":
      return redirect('/ontologies/pair-2021-summer/ontology.nt', 303);

    default:
      return redirect('/ontologies/pair-2021-summer/index-en.html', 303);
  }
};

