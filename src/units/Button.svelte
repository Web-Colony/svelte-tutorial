<script>
    export let type = "primary";
    export let inverse = false;
    export let flat = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>

<style>
    button {
        border : 0;
        cursor: pointer;
        font-weight: bold;
        border-radius: 6px;
        padding: 8px 12px;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }
    .primary {
        background-color: #d91b42;
        color: white
    }
    .secondary {
        background-color: #45c496;
        color: white;
    }
    .flat {
        box-shadow: none;
    }
    .primary.inverse {
        background-color: white;
        color: #d91b42;
        border: 2px solid #d91b42;
    }

    .secondary.inverse {
        background-color: white;
        color: #45c496;
        border: 2px solid #45c496;
    }
</style>