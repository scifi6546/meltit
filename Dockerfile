FROM mkenney/npm:debian
WORKDIR /app
ADD . /app

RUN npm update && ./zoom.sh
#ADD zoom.sh /app/zoom.sh
#run chmod +x zoom.sh
#RUN ./zoom.sh
EXPOSE 8080
CMD ["./node_modules/http-server/bin/http-server","."]
