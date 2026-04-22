"use strict";
n.d(t, { G: () => i, v: () => s });
var r,
    i =
        (((r = {})[(r.SET_COMPLETED = 1)] = "SET_COMPLETED"),
        (r[(r.UNSET_COMPLETED = 2)] = "UNSET_COMPLETED"),
        (r[(r.DELETE_USER_MESSAGE = 3)] = "DELETE_USER_MESSAGE"),
        (r[(r.SUBMIT_FEEDBACK = 4)] = "SUBMIT_FEEDBACK"),
        r);
function s(e) {
    if (null == e) return null;
    let t = (function (e) {
        if (null == e) return null;
        try {
            return JSON.parse(e);
        } catch (e) {
            return null;
        }
    })(e);
    return null == t || null == t.actions
        ? null
        : (Object.keys(t.actions).forEach((e) => {
              t.actions[e].actionType = e;
          }),
          t);
}
