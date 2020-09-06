export default function() {
  return [
    {
      title: "Temperature History",
      to: "/temperature-history",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Take New Temperature",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/take-new-temperature",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
  ];
}
