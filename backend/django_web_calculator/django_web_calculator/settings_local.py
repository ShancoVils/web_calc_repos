
# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'web_calculator_db',
        'USER' : 'postgres',
        'PASSWORD' : 'sikurity1399',
        'HOST' : '127.0.0.1',
        'PORT' : '5432',
    }
}