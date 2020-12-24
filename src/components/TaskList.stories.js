import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

export default {
    title: 'TaskList',
    component: TaskList,
    decoratos: [() => '<div style="padding: 3rem;"><story /></div>']
};

const Template = ( args, {argTypes}) => ({
    components: {TaskList},
    props: Object.keys(argTypes),
    // Reusando as actions da Task.stories.js
    methods: TaskStories.actionsData,
    template: '<TaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

export const Default = Template.bind({});

Default.args = {
    //Modelando  as estories pelos argumenntos
    // Os dados vem das da history padrão do task.stories.js
    tasks: [
        { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
        { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
        { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
        { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
    ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    tasks: [
        ...Default.args.tasks.slice(0 , 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ]
  
}
export const WithPinnedAndArchiveTasks = Template.bind({});
WithPinnedAndArchiveTasks.args = {
    tasks: [
        ...Default.args.tasks.slice(0 , 4),
        { id: '5', title: 'Task 5 (pinned)', state: 'TASK_PINNED' },
        { id: '6', title: 'Task 6 (archived)', state: 'TASK_ARCHIVED' },
    ]
  
}

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true
}
export const Empty = Template.bind({});
    //Modelando  as estories pelos argumenntos
    // Os dados vem da history Loading 
Empty.args = {
    ...Loading.args,
    loading: false
}

