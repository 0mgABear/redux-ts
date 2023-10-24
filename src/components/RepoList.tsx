import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypeSelector";

const RepoList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepo } = useActions();
  const { data, error, loading } = useSelector(
    (state: any) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepo(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>{loading}</h3>}
        {!error &&
          !loading &&
          data.map((name: string) => {
            <div key={name}>{name}</div>;
          })}
      </form>
    </div>
  );
};

export default RepoList;
