#! /bin/bash

phone_number="${PHONE_NUMBER:-+420123456789}"
phone_number_f="${PHONE_NUMBER_F:-+420 123 456 789}"
email_address="${EMAIL_ADDRESS:-emailova@adresa.cz}"

sed -i -e "s/{{PHONE_NUMBER}}/$phone_number/" -e "s/{{PHONE_NUMBER_F}}/$phone_number_f/" -e "s/{{EMAIL_ADDRESS}}/$email_address/g" dist/index.html dist/en/index.html
