# [TableExport](https://github.com/clarketm/TableExport) + [Flask](http://flask.pocoo.org/)

This project is a simple app demonstrating the use of [TableExport](https://github.com/clarketm/TableExport) and [Flask](http://flask.pocoo.org/). It includes a sample project that you can use as a skeleton (or template) to get started.

<br>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/clarketm/tableexport_flask_app.git)

### Checkout the [demo](https://tableexport-flask-app.herokuapp.com/)!
<br>

## Quickstart

First, set your app's secret key as an environment variable.
> **e.g.** add the following to `.bashrc` or `.bash_profile`.

``` bash
export TABLEEXPORT_FLASK_APP_SECRET='something-really-secret'
```

Before running shell commands, set the `FLASK_APP` and `FLASK_DEBUG` environment variables.

``` bash
export FLASK_APP=/path/to/autoapp.py
export FLASK_DEBUG=1
```

Then run the following commands to bootstrap your environment.

``` bash
git clone https://github.com/clarketm/tableexport_flask_app
cd tableexport_flask_app
pip install -r requirements/dev.txt
bower install
flask run
```

You will see a pretty welcome screen.

Once you have installed your DBMS, run the following to create your app's database tables and perform the initial migration.

``` bash
flask db init
flask db migrate
flask db upgrade
flask run
```

## Deployment

In your production environment, make sure the `FLASK_DEBUG` environment variable is unset or is set to `0`, so that `ProdConfig` is used.


## Shell

To open the interactive shell, run:

``` bash
flask shell
```

By default, you will have access to the flask `app`.


## Running Tests

To run all tests, run:

``` bash
flask test
```

## Migrations

Whenever a database migration needs to be made. Run the following commands:

``` bash
flask db migrate
```

This will generate a new migration script. Then run:

``` bash
flask db upgrade
```

To apply the migration.

> For a full migration command reference, run `flask db --help`.
