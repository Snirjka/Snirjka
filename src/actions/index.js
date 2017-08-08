import axios from 'axios';
const root = "/";

export const getMapData = () => {
    return function (dispatch) {
        axios.get(root + "data.json")
            .then(function (response) {
                //Extract locations from data
                const locations = [];
                for (let i = 0; i < response.data.events.length; i++) {
                    let locationCheck = locations.findIndex(location => location.id == response.data.events[i].venue.id)
                    if (locationCheck == -1) {
                        let location = response.data.events[i].venue;
                        location.showInfo = false;
                        locations.push(location);
                    }
                }
                dispatch({ type: "LOCATIONS_RECIEVED", payload: locations });
                dispatch({ type: "EVENTS_RECIEVED", payload: response.data.events });
            }
            ).catch(function (error) {
                dispatch({ type: "EVENTS_ERR", payload: [] });
                console.log(error);
            })
    }
}