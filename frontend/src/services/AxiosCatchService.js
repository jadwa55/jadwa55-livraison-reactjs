export function handelCatchInAxios(error) {
    const { response } = error;
    if (response.status == 401) {
        console.log('hire');
        alert(response.data.message ?? response.statusText)
        window.location = "/";
    } else {
        alert(response.statusText)
        window.location = "/";
    }
}