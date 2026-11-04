n.r(t);
var i = n(626584),
    r = n(817476);
let a = new i.A("native/DeviceState.tsx");
n.d(
    t,
    {},
    {
        getDeviceState: function () {
            let { fallback: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fallback: !0 };
            return e ? Promise.resolve(r.t) : Promise.reject("Cannot get device state on web");
        },
        logger: a,
    },
);
