// ==================== Static Methods ====================

// Object.assign()
//Copies enumerable properties from one or more source objects to a target object.
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log("assign:", target); // {a:1, b:2, c:3}

// Object.create()
//Creates a new object with the given prototype.
let proto = { greet: function() { return "Hello"; } };
let obj1 = Object.create(proto, { name: { value: "Gayatri", writable: true } });
console.log("create:", obj1.name, obj1.greet());

// Object.defineProperty()
//Defines a new property on an object with detailed descriptors.
let obj2 = {};
Object.defineProperty(obj2, "x", { value: 42, writable: false });
console.log("defineProperty:", obj2.x);

// Object.defineProperties()
//Defines multiple properties at once.
let obj3 = {};
Object.defineProperties(obj3, {
  y: { value: 10, writable: true },
  z: { value: 20, writable: true }
});
console.log("defineProperties:", obj3);

// Object.entries()
//Returns an array of [key, value] pairs of enumerable properties.
console.log("entries:", Object.entries({ a: 1, b: 2 }));

// Object.fromEntries()
//Converts key-value pairs into an object.
let mapEntries = [["x", 1], ["y", 2]];
console.log("fromEntries:", Object.fromEntries(mapEntries));

// Object.freeze()
//Freezes an object (no new properties, no modification).
let obj4 = { p: 5 };
Object.freeze(obj4);
obj4.p = 10; // won’t change
console.log("freeze:", obj4);

// Object.getOwnPropertyDescriptor()
//Returns descriptor of a property.
console.log("getOwnPropertyDescriptor:", Object.getOwnPropertyDescriptor(obj2, "x"));

// Object.getOwnPropertyDescriptors()
//Returns all property descriptors.
console.log("getOwnPropertyDescriptors:", Object.getOwnPropertyDescriptors(obj3));

// Object.getOwnPropertyNames()
//Returns an array of all property names (including non-enumerable).
console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(obj3));

// Object.getOwnPropertySymbols()
//Returns an array of symbol keys.
let sym = Symbol("id");
let obj5 = { [sym]: 123 };
console.log("getOwnPropertySymbols:", Object.getOwnPropertySymbols(obj5));

// Object.getPrototypeOf()
//Returns the prototype of an object.
console.log("getPrototypeOf:", Object.getPrototypeOf(obj1) === proto);

// Object.hasOwn()
//Returns true if object has the property as its own (newer, better than hasOwnProperty).
console.log("hasOwn:", Object.hasOwn(obj3, "y"));

// Object.is()
//Compares if two values are the same (like === but handles NaN and -0).
console.log("is:", Object.is(NaN, NaN), Object.is(0, -0));

// Object.isExtensible()
//Checks if new properties can be added.
let obj6 = {};
console.log("isExtensible before:", Object.isExtensible(obj6));
Object.preventExtensions(obj6);
console.log("isExtensible after:", Object.isExtensible(obj6));

// Object.isFrozen()
//Checks if object is frozen.
console.log("isFrozen:", Object.isFrozen(obj4));

// Object.isSealed()
//Checks if object is sealed.
let obj7 = { a: 1 };
Object.seal(obj7);
console.log("isSealed:", Object.isSealed(obj7));

// Object.keys()
//Returns an array of enumerable property names.
console.log("keys:", Object.keys({ a: 1, b: 2 }));

// Object.preventExtensions()
//Prevents new properties from being added.
let obj8 = {};
Object.preventExtensions(obj8);
obj8.newProp = "test"; // won’t be added
console.log("preventExtensions:", obj8);

// Object.seal()
//Seals an object (can’t add/remove props but can modify existing).
let obj9 = { a: 1 };
Object.seal(obj9);
delete obj9.a; // won’t delete
console.log("seal:", obj9);

// Object.setPrototypeOf()
//Sets the prototype of an object.
let obj10 = {};
Object.setPrototypeOf(obj10, proto);
console.log("setPrototypeOf:", obj10.greet());

// Object.values()
//Returns an array of enumerable property values.
 
console.log("values:", Object.values({ a: 1, b: 2 }));


// ==================== Prototype Methods ====================

let obj11 = { a: 1, b: 2 };

// constructor
//Specifies the function that created the object.
console.log("constructor:", obj11.constructor === Object);

// hasOwnProperty()
//Checks if the property is a direct property (not inherited).
console.log("hasOwnProperty:", obj11.hasOwnProperty("a"));

// isPrototypeOf()
//Checks if an object exists in another object's prototype chain.
console.log("isPrototypeOf:", proto.isPrototypeOf(obj1));

// propertyIsEnumerable()
//Checks if a property is enumerable.
console.log("propertyIsEnumerable:", obj11.propertyIsEnumerable("a"));

// toLocaleString()
//Converts object to a locale-specific string.
console.log("toLocaleString:", obj11.toLocaleString());

// toString()
//Returns string representation of the object.
console.log("toString:", obj11.toString());

// valueOf()
//Returns the primitive value of the object.
console.log("valueOf:", obj11.valueOf());
