<template>
    <div class="list-item" :class="task.state">
        <label for="" class="checkbox">
            <input type="checkbox" :checked="isChecked" disabled name="checked" />
            <span class="checkbox-custom" @click="$emit('archive-task', task.id)"></span>
        </label>
        <div class="title">
            <input type="text" :value="task.title" readonly placeholder="Input title"/>
        </div>
        <div class="actions">
            <a v-if="!isChecked" @click="$emit('pin-task', task.id)">
                    <span class="icon-star" />
            </a>
    </div>
    </div>

</template>
<script>
export default {
    name: 'task',
    props:{
        task:{
            type: Object,
            required:true,
            default:() => ({
                id:'',
                state:'',
                title:''
            }),
            validador:task => ['id', 'state', 'title'].every(key => key in task),
        }
    },
    computed:{
        isChecked(){
            return this.task.state === 'TASK_ARCHIVED';
        },
        isPinned(){
            return this.task.state === 'TASK_PINNED';
        }
    }
}
</script>