"use strict";
var n = {}.propertyIsEnumerable,
    i = Object.getOwnPropertyDescriptor;
t.f =
    i && !n.call({ 1: 2 }, 1)
        ? function (e) {
              var t = i(this, e);
              return !!t && t.enumerable;
          }
        : n;
