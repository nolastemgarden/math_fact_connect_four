import React from 'react'
import PropTypes from 'prop-types';


// MY components
import { SettingsStepper } from "./SettingsStepper";
// import { MobileSettingsStepper } from "./MobileSettingsStepper";
// import { DesktopSettingsStepper } from "./DesktopSettingsStepper";

// MUI components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// MUI icons
import CloseIcon from '@material-ui/icons/Close';

export default function NewGameButton() {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    
    
    // const [selectedValue, setSelectedValue] = React.useState({
    //     opponent: "human",
    //     difficulty: "hard"
    // });

    const handleOpenDialog = () => { setDialogOpen(true) }
    const handleCloseDialog = () => { setDialogOpen(false) }

    return (
        <React.Fragment >
            <Button variant="contained" onClick={handleOpenDialog}>
                Play Now!
            </Button>
            <SettingsDialog
                dialogOpen={dialogOpen}
                onClose={handleCloseDialog}
            />
        </React.Fragment>
    );
}

function SettingsDialog(props) {
    const { onClose, selectedValue, dialogOpen } = props;
    const theme = useTheme()
    const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Box 
            sx={{ bgcolor: 'white' }}
        >
            <Dialog
                onClose={onClose}
                open={dialogOpen}
                fullScreen={mobileDevice}
            >
                <CloseIcon
                    sx={{ margin: '1rem 1rem 0 auto' }}
                    onClick={() => onClose()}
                />
                <SettingsStepper />
            </Dialog>
        </Box>
    );
}
// SettingsDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.object.isRequired,
// }

