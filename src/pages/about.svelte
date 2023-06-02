<Page>


  <BlockTitle>
    <div class="heading">
    <div class="heading-items">23 января 2023</div>
    <div class="heading-items" style="color: green;">+700</div>
    </div>
  </BlockTitle>
  <List dividersIos strong inset>
    
    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: green;">+500</div>
    </ListItem>

    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: green;">+700</div>
    </ListItem>

    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: red;">-1500</div>
    </ListItem>

  </List>

  <BlockTitle>
    <div class="heading">
    <div class="heading-items">23 января 2023</div>
    <div class="heading-items" style="color: green;">+700</div>
    </div>
  </BlockTitle>
  <List dividersIos strongIos inset>
    
    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: green;">+500</div>
    </ListItem>

    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: green;">+700</div>
    </ListItem>

    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: red;">-1500</div>
    </ListItem>

  </List>

  <BlockTitle>
    <div class="heading">
    <div class="heading-items">23 января 2023</div>
    <div class="heading-items" style="color: green;">+700</div>
    </div>
  </BlockTitle>
  <List dividersIos strongIos inset>
    
    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: green;">+500</div>
    </ListItem>

    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: green;">+700</div>
    </ListItem>

    <ListItem title="john@doe" footer="Home">
      <div class="item-after" style="color: red;">-1500</div>
    </ListItem>

  </List>



</Page>
<script>
  import { f7, Page, List, ListItem, Button, Block, BlockTitle } from 'framework7-svelte';

  const tg = window.Telegram.WebApp;

  let initData = tg.themeParams 

  var BackButton = tg.BackButton;
  
  
  export let f7router;
  
  
  

  
  
  BackButton.show();

  BackButton.onClick(function() {
  f7router.back()
  BackButton.hide();
});

</script>

<style>
  .heading{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
  .heading-items{
    margin: 0 18px 0 18px
  }
</style>
