import React from "react";
import Layout from "./components/layout"
import Profile from "./components/profile";
import { ResetCSS } from "./components/global/resetCSS";
import Repositories from "./components/repositories";
import GithubProvider from "./providers/github-provider";


const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
