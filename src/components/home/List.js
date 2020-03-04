import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemSecondaryAction, Tooltip, Fab, Divider, List, ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [showTrash, setShowTrash] = useState(false);

    const showIconTrash = () => {
        setShowTrash(!showTrash);
    }

    const hideIconTrash = () => event => {
        setShowTrash(false);
    }

    const handleClick = () => event => {
        setOpen(!open);
    };

    return (
        <List
            dense
        >
            {
                [{ id: 1, nombre: "hola" }, { id: 2, nombre: "hola 2" }].map((e, i) => (
                    <div key={i}>
                        <ListItem button key={e.id} style={{ padding: 10 }} onMouseOver={showIconTrash}>
                            <ListItemAvatar>
                                <Avatar>{e.id}</Avatar>
                            </ListItemAvatar>
                            <ListItemText >{e.nombre}</ListItemText>
                            <ListItemSecondaryAction>
                                <Tooltip  title="Eliminar" aria-label="Eliminar">
                                    <DeleteIcon></DeleteIcon>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </div>
                ))

            }
        </List>
    );
}
