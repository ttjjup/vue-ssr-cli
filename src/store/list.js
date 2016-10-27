import fetch from 'isomorphic-fetch';

var getList = ({commit}) => {
	commit('REQUEST_LIST');
	fetch("http://ac-onsg2j7w.clouddn.com/33e911a97630d768.json")
	.then(function(res) {
		// res instanceof Response == true.
		if (res.ok) {
			res.json().then(function(data) {
				commit('GET_LIST', {
					items: data['What can i do']['List']
				});
			});
		}
		else {
			console.log("Looks like the response wasn't perfect, got status", res.status);
			commit('GET_LIST', {
				items: []
			});	
		}
	}, function(e) {
		console.log("Fetch failed!", e);
		commit('GET_LIST', {
			items: []
		});	
	});
};

var state = {
    isFetching: false,
    items: [],
}

var mutations = {
	REQUEST_LIST (state) {
		state.isFetching = true
	},
	GET_LIST (state, action) {
		state.isFetching = false;
		state.items = action.items
	}
};

var actions = {
    getList
};

var getters = {
    isFetching: state => state.isFetching,
    items: state => state.items
}

export default {
    state,
    getters,
    mutations,
    actions
};