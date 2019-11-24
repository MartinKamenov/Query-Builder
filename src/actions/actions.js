const actions = {
    deployProject: function(projectId, token) {
        return async function(dispatch) {
            try {
                const res = await apiService.deployProject(projectId, token);
                const projectStatus = res.data;
                return dispatch(deployProjectSuccess(projectStatus));
            } catch(error) {
                dispatch(toastError(error.message));
                return dispatch(createError(error.message));
            }
        };
    },
    deployProjectSuccess: function(projectStatus) {
        return { type: types.DEPLOY_PROJECT_SUCCESS, projectStatus };
    }
};