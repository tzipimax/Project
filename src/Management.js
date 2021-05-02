import React, { useState, useContext } from 'react';
import NewProduct from './NewProduct';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { productsContext } from './ProductsContext';





const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

}));


function Management() {
    debugger;
    const [values, setValues] = React.useState({
        password: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const enter = (event) => {
        handleChange('password');
        event.preventDefault();
        if (name == "Adm" && password == "a123456") {
            setLogin(true);
        }
        else {
            setError(true);
            setName('');
            setPassword('');
        }
    }
    const [error, setError] = useState(false);
    const [login, setLogin] = useState(false);
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const classes = useStyles();
    const [updatedProducts, setUpdatedProducts] = useState(useContext(productsContext));
    const products = useContext(productsContext);
    const addNewProduct = (product) => {
        products.push(product);
        setUpdatedProducts([...products]);
    }

    return (
        login === true ?
            <NewProduct addNewProduct={addNewProduct} />
            :
            <form className={classes.root} noValidate autoComplete="off">
                {/* <input placeholder="שם משתמש" ></input> */}
                {/* <input type="password" placeholder="סיסמה" onChange={e => setPassword(e.target.value)} value={password}></input> */}
                <TextField id="standard-basic" label="user name" onChange={e => setName(e.target.value)} value={name} />
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={e => setPassword(e.target.value)} value={password}
                    // onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}

                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Button variant="outlined" onClick={enter}>התחבר</Button>
                {error ? <h4>הכניסה מורשית למשתמש מנהל בלבד</h4> : ''}
                {/* <button onClick={enter}>התחבר</button> */}

            </form>
    );
}

export default Management;