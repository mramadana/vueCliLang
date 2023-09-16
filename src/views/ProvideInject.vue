<template>
    <div class="provide">
        <h1>provide inject component</h1>
        <p> your name is : {{ ourName }}</p>
        <p> your age is : {{ age }}</p>
        <p>my props is {{myProp}}</p>
        <button @click="Myfunction">provide & inject function</button>
    </div>
</template>

<script>

export default {
    inject: ['ourName', 'age', 'Myfunction'],
    props: ['myProp']
}


</script>
