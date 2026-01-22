n.r(t),
    n.d(t, {
        getDeviceState: () => s,
        logger: () => a,
    });
var r = n(626584),
    i = n(817476);
let a = new r.A("native/DeviceState.tsx");

function s() {
    let { fallback: e } =
        arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                  fallback: !0,
              };
    return e ? Promise.resolve(i.t) : Promise.reject("Cannot get device state on web");
}
