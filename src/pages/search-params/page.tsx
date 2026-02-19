import { useFetcher, useSearchParams } from "react-router";
import Child1 from "./Child1";
import { useState } from "react";
import type { LoaderFunctionArgs } from "react-router";
import Child2 from "./Child2";
import "../../index.css";

async function loader({ request }: LoaderFunctionArgs) {
  const bb = "max favor";

  return { bb };
}

let cc = 0;

const SearchParamPage = () => {
  const [search, setSearch] = useSearchParams();
  const [x, setX] = useState<number>();

  const fetcher = useFetcher();

  const handleFetcherLoad = () => {
    fetcher.load("/search-params");
  };

  const handler = (str: string) => {
    search.set("hello", str);
    setSearch(search);
  };

  const mutateSearchObj = () => {
    search.set("lol", "hahahahah");
  };
  return (
    <div style={{ display: "flex", gap: 20, flexDirection: "column" }}>
      <div style={{ background: "gray" }}>
        Parent
        <div className="flex gap-5">
          <button className="border" onClick={() => handler("sup")}>
            Set hello
          </button>
          <button className="border" onClick={() => handler(Math.random().toString())}>
            Set random
          </button>
          <button className="border" onClick={() => setX(Math.random())}>
            Re-render parent
          </button>
          <button className="border" onClick={handleFetcherLoad}>
            fetcher.load()
          </button>
          <button className="border" onClick={mutateSearchObj}>
            just mutate the search param obj
          </button>
        </div>
      </div>
      <Child1 />
      <Child2 searchParams={search} />
    </div>
  );
};

SearchParamPage.loader = loader;

export default SearchParamPage;
