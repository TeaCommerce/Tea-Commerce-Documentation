# Versions

<div v-if="$site.themeConfig.versions.current">

## Current Version
Current version of {{ $site.title }}

| {{$site.themeConfig.versions.current}} | <router-link :to="'/' + $site.themeConfig.versions.current +'/'">Docs</router-link> |
| ------- | -------------------------- |

</div> 

<div v-if="$site.themeConfig.versions.next">

## Next Version
Latest unreleased version of {{ $site.title }}

| {{$site.themeConfig.versions.next}} | <router-link :to="'/' + $site.themeConfig.versions.next +'/'">Docs</router-link> |
| ------- | -------------------------- |

</div>

<div v-if="$site.themeConfig.versions.previous
 && $site.themeConfig.versions.previous.length > 0">

## Previous Versions
Previous versions of {{ $site.title }} 
 
<table>
    <tr v-for="version in $site.themeConfig.versions.previous">
        <th>{{version}}</th>
        <th><router-link :to="'/' + version +'/'">Docs</router-link></th>
    </tr> 
</table>

</div>