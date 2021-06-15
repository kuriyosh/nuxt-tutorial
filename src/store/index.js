export const store = () => ({
  loginedUser: null
});

export const getters = {
  isLoggedIn: state => !!state.loginedUser
};

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (!authUser) {
      claims = null;
      state.loginedUser = null;
    } else {
      const { uid, email, emailVerified } = authUser;
      state.loginedUser = { uid, email, emailVerified };
    }
  }
};

export const actions = {
  nuxtServerInit: async ({ dispatch, commit }, { res }) => {
    if (res?.locals?.user) {
      const {
        allClaims: claims,
        idToken: token,
        ...authUser
      } = res.locals.user;
      commit("ON_AUTH_STATE_CHANGED_MUTATION", { authUser, claims });
    }
  }
};
