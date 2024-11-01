import { registerUrql } from "@urql/next/rsc";
import { cacheExchange, createClient, fetchExchange, gql } from "urql";

const makeClient = () => {
  return createClient({
    url: "https://trygql.formidable.dev/graphql/basic-pokedex",
    exchanges: [cacheExchange, fetchExchange],
  });
};

const { getClient } = registerUrql(makeClient);

const PokemonsQuery = gql`
  query {
    pokemons(limit: 10) {
      id
      name
    }
  }
`;

export default async function UrqlDemoPage() {
  const { data } = await getClient().query(PokemonsQuery, {});
  console.log(data);

  return <div>demo</div>;
}
