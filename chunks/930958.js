"use strict";
n.d(t, { k: () => s });
let r = /(!|\.|;|,|-|—|–|\?|"|')/g,
    i = /(\n|\t|\s)/g,
    a = (e) => e.replace(r, "").replace(i, " "),
    s = (e) => (null == e ? [] : a(e).trim().split(" "));
