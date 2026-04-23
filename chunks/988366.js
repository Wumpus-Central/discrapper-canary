"use strict";
var n = {}.propertyIsEnumerable,
    r = Object.getOwnPropertyDescriptor;
t.f =
    r && !n.call({ 1: 2 }, 1)
        ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
          }
        : n;
