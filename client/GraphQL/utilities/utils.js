import { graphql } from 'react-apollo';


export function gqlWrapper(reactComp, ...gqlComps){
  if(gqlComps.length == 0)
    return reactComp;

  return gqlComps.reduce((prev, gqlComp) => graphql(gqlComp)(prev), reactComp);
}
