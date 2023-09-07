class API {
    location = 'http://192.168.0.123:8000/'
    username = 'test'

    async getDatabase(username) {
        this.username = username;
    }

    async getReference() {
        return await fetch(this.location + 'reference/' + this.username).then(res=>res.json())
    }

    async getTopbarData() {
        return await fetch(this.location + 'topbar/' + this.username).then(res=>res.json())
    }

    async getRealtimeData() {

    }

    async getTimeData() {
        return await fetch(this.location + 'timelimits/' + this.username).then(res=>res.json())
    }

    async getDepthData() {

    }

    async getBalanceData() {

    }

    async getProfileData() {

    }

    async getVideoData() {

    }
}

export default new API();