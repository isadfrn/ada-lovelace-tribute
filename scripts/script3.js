const element = document.getElementById("mobile-navigation");
const menu = document.getElementById("menu-button");
const close = document.getElementById("close-button");
const navigation = document.getElementById("navigation");
const mobileNavigationOpen = document.getElementById("mobile-navigation-open");

function toggleMobileNavigation() {
  // When menu exists
  if(element.classList.contains("mobile-navigation-open")) {
    element.classList.remove("mobile-navigation-open");
    close.classList.add("hide");
    menu.classList.remove("hide");
    navigation.classList.add("hide");
  } 
  // When menu doesn't exist
  else {
    element.classList.add("mobile-navigation-open");
    menu.classList.add("hide");
    close.classList.remove("hide");
    navigation.classList.remove("hide");
  }
}

mobileNavigationOpen.addEventListener("click", (e) => {
  if(e.target == mobileNavigationOpen) {
    console.log("clicked")
    element.classList.remove("mobile-navigation-open");
    close.classList.add("hide");
    menu.classList.remove("hide");
    navigation.classList.add("hide");
  }
})

