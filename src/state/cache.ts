import { InMemoryCache, makeVar } from "@apollo/client";

const settingInitialVal = {
  value: 1,
};

export const settingVar = makeVar(settingInitialVal);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        setting: {
          read() {
            return settingVar();
          },
        },
      },
    },
  },
});
