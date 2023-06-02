<Page name="history">
    {#await promise}
        <p>Loading...</p>
    {:then data}
        {JSON.stringify(data, null, 2)}
    {/await}
        {JSON.stringify(initData, null, 2)}
{platform}
{colorScheme}
{JSON.stringify(themeParams, null, 2)}
{isExpanded}
{headerColor}
{backgroundColor}
</Page>

<script>
    import {Page} from 'framework7-svelte';

    const tg = window.Telegram.WebApp;
    let initData = tg.initDataUnsafe
    let platform = tg.platform
    let colorScheme = tg.colorScheme
    let themeParams = tg.themeParams
    let isExpanded = tg.isExpanded
    let headerColor = tg.headerColor
    let backgroundColor = tg.backgroundColor
    tg.expand()

    async function getData() {
        let response = await fetch("../api/resultmonth.json");
        let data = await response.json();
        return data;
    }
  const promise = getData();
</script>
