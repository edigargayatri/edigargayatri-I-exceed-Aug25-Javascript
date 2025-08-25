// List all IANA time zones
let timeZones = Intl.supportedValuesOf('timeZone');
console.log(timeZones);
let currenttime=new Intl.DateTimeFormat("en-US",
    {timeZone:"Asia/kolkata",timeStyle:"medium",dateStyle:"long"}
     ).format(new Date());
 
console.log(currenttime);
// Get the current time in each zone
timeZones.forEach(zone => {
  let time = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    timeStyle: "medium",
    dateStyle: "short"
  }).format(new Date());
 
  console.log(zone, "→", time);
});