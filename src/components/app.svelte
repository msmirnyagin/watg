<App { ...f7params }>

 
  <!-- Your main view, should have "view-main" class -->
  <View main url="/offer/" />


</App>
<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    View,
  } from 'framework7-svelte';


  import routes from '../js/routes';
  import store from '../js/store';


  // Framework7 Parameters
  let tg = window.Telegram.WebApp;

  let mode = tg.colorScheme
  let newColor = tg.button_color


  let f7params = {
    name: 'tg webapp templates', // App name
    theme: 'ios', // Automatic theme detection
    darkMode: (mode === 'dark'),
    // App store
    store: store,
    // App routes
    routes: routes,
  };
 


  onMount(() => {
    f7ready(() => {


      // Call F7 APIs here
    });
  })
</script>