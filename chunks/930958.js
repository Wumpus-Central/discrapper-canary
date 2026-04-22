"use strict";
n.d(t, { k: () => s });
let r = /(!|\.|;|,|-|—|–|\?|"|')/g,
    i = /(\n|\t|\s)/g,
    s = (e) => (null == e ? [] : e.replace(r, "").replace(i, " ").trim().split(" "));
