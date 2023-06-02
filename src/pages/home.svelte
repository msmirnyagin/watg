<Page name="home">

  <Card>
    <span slot="header">Баланс</span>
    <span slot="content">
      <div>10 000</div>
    </span>
    <span slot="footer">Footer</span>
  </Card>

  <BlockTitle medium>Активность</BlockTitle>
  <Block>
  <div class="grid grid-cols-2">
    <div>
      jhgjhg
    </div>
    <div>
      khkhkj
    </div>
  </div>
  </Block>
  <Card>
    <span slot="content">
      <div>10 000</div>
    </span>
  </Card>
  
  <BlockTitle medium>Статистика</BlockTitle>
  
  <BlockTitle medium>Счета</BlockTitle>


  <Block>
    <p>Here is your blank Framework7 app. Let's see what we have here.</p>
  </Block>

  <BlockTitle>2 Slides Per View, 20px Between</BlockTitle>
  <swiper-container
    class="demo-swiper-multiple"
    space-between={20}
    slides-per-view={2}
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
  </swiper-container>


  <BlockTitle>Navigation</BlockTitle>

  <BlockTitle>Simple Cards</BlockTitle>
  <Card
    content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
  />

  <List strong inset dividersIos>
    <ListItem link="/about/" title="About"/>
    <ListItem link="/form/" title="Form"/>
  </List>

  <List strong inset dividersIos>
    <ListItem
      title="Dynamic (Component) Route"
      link="/dynamic-route/blog/45/post/125/?foo=bar#about"
    />
    <ListItem
      title="Default Route (404)"
      link="/load-something-that-doesnt-exist/"
    />
    <ListItem
      title="Request Data & Load"
      link="/request-and-load/user/123456/"
    />
  </List>
</Page>
<script>
  import {
    Page,
    Card,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button
  } from 'framework7-svelte';

</script>