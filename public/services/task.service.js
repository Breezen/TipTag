(function () {
    angular
        .module("TipTag")
        .factory("TaskService", TaskService);
    
    function TaskService($http) {
        var api = {
            create: create,
            update: update,
            findAllTasks: findAllTasks,
            findTaskById: findTaskById,
            findTasksByTipper: findTasksByTipper,
            getUnsplashCurated: getUnsplashCurated,
            getUnsplashRandom: getUnsplashRandom,
            getUnsplashSearch: getUnsplashSearch
        };
        return api;

        function create(task) {
            return $http.post("/api/task", task);
        }

        function update(task) {
            return $http.put("/api/task", task);
        }
        
        function findAllTasks() {
            return $http.get("/api/tasks");
        }

        function findTaskById(tid) {
            return $http.get("/api/task/" + tid);
        }

        function findTasksByTipper(uid) {
            return $http.get("/api/tasks/" + uid + "?role=TIPPER");
        }

        function getUnsplashCurated() {
            return $http.get("https://api.unsplash.com/photos/curated?client_id=41a2ea00bfb748d78f985675f374a2d9b8f6a4e1973f4cf017df9c943f2da7b3");
        }
        
        function getUnsplashRandom() {
            return $http.get("https://api.unsplash.com/photos/random?client_id=41a2ea00bfb748d78f985675f374a2d9b8f6a4e1973f4cf017df9c943f2da7b3");
        }
        
        function getUnsplashSearch(term) {
            return $http.get("https://api.unsplash.com/search/photos?client_id=41a2ea00bfb748d78f985675f374a2d9b8f6a4e1973f4cf017df9c943f2da7b3&per_page=30&query=" + term);
        }
    }
})();