import type { MutationTree } from "vuex";
import type { RootState } from "./types";

export const mutations: MutationTree<RootState> = {
  setModal(state, mode: Boolean) {
    state.isModal = mode;
  },
  setLoading(state, mode: Boolean) {
    state.isLoad = mode;
  },
};
