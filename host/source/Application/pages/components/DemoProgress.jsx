/* eslint-disable */
import React, { useReducer, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import TaskState from './TaskStatus';

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBox: {
        outline: 'none',
    },
});

const initialTaskStates = {
    app: { inProgress: true, completed: false, errors: false },
    entry: { inProgress: false, completed: false, errors: false },
    component: { inProgress: false, completed: false, errors: false },
    mount: { inProgress: false, completed: false, errors: false },
};

const tasksReducer = (state, action) => {
    const { name, status } = action;
    if (name === 'reset') {
        return initialTaskStates;
    }
    // In the case of a key collision, the right-most (last) object's value wins out
    return { ...state, [name]: { ...state[name], ...status } };
};

/**
 * Handle deploying a sample API (Create, Deploy and Publish)
 *
 * @class SampleAPI
 * @extends {Component}
 */

const DemoProgress = (props) => {
    const { component, mount } = props;
    const [tasksStatus, tasksStatusDispatcher] = useReducer(tasksReducer, initialTaskStates);
    const classes = useStyles();

    useEffect(() => {
        setTimeout(() => {
            tasksStatusDispatcher({ name: 'app', status: { completed: true, inProgress: false } });
            tasksStatusDispatcher({ name: 'entry', status: { inProgress: true } });
        }, 500);
        setTimeout(() => {
            tasksStatusDispatcher({ name: 'entry', status: { completed: true, inProgress: false } });
        }, 1500);
    }, [])

    useEffect(() => {
        component && tasksStatusDispatcher({ name: 'component', status: component });
    }, [component]);
    useEffect(() => {
        mount && tasksStatusDispatcher({ name: 'mount', status: mount });
    }, [mount])
    //   const taskManager = async (promisedTask, name) => {
    //     tasksStatusDispatcher({ name, status: { inProgress: true } });
    //     let taskResult;
    //     try {
    //       taskResult = await promisedTask;
    //     } catch (errors) {
    //       console.error(errors);
    //       tasksStatusDispatcher({ name, status: { errors } });
    //     }
    //     tasksStatusDispatcher({ name, status: { inProgress: false, completed: true } });
    //     return taskResult;
    //   };

    return (
        <Box
            bgcolor="background.paper"
            borderRadius="borderRadius"
            className={classes.statusBox}
            p={2}
        >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <TaskState
                    completed={tasksStatus.app.completed}
                    errors={tasksStatus.app.errors}
                    inProgress={tasksStatus.app.inProgress}
                    completedMessage="Host application loaded successfully!"
                    inProgressMessage="Loading host application . . ."
                >
                    Load host application
        </TaskState>
                <TaskState
                    completed={tasksStatus.entry.completed}
                    errors={tasksStatus.entry.errors}
                    inProgress={tasksStatus.entry.inProgress}
                    completedMessage="Remote entrypoint loaded successfully!"
                    inProgressMessage="Loading remote entrypoint script . . ."
                >
                    Load remote entry
        </TaskState>
                <TaskState
                    completed={tasksStatus.component.completed}
                    errors={tasksStatus.component.errors}
                    inProgress={tasksStatus.component.inProgress}
                    completedMessage="Remote component fetched successfully!"
                    inProgressMessage="Loading remote component . . ."
                >
                    Load remote component
        </TaskState>
                <TaskState
                    completed={tasksStatus.mount.completed}
                    errors={tasksStatus.mount.errors}
                    inProgress={tasksStatus.mount.inProgress}
                    completedMessage="Remote component mounted successfully!"
                    inProgressMessage="Mounting remote component . . ."
                >
                    Mount remote component
        </TaskState>
            </Grid>
        </Box>
    );
};

export default DemoProgress;
