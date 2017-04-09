(function () {
    angular
        .module("TipTag")
        .controller("HeaderController", HeaderController);

    function HeaderController($rootScope, $location, UserService) {
        var vm = this;

        function init() {
            UserService
                .loggedin()
                .then(function (res) {
                    if (res.data) $rootScope.currentUser = res.data;
                    else $rootScope.currentUser = null;
                });
        }
        init();

        vm.login = function () {
            $location.url("/login");
        };
        vm.loggedin = function () {
            return $rootScope.currentUser !== null;
        };
        vm.logout = function () {
            UserService
                .logout()
                .then(function (res) {
                    $rootScope.currentUser = null;
                    $location.url("/");
                });
        };
    }
})();